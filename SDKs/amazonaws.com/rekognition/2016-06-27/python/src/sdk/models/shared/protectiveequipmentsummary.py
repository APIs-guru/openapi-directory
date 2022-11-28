from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProtectiveEquipmentSummary:
    r"""ProtectiveEquipmentSummary
    <p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in the <code>SummarizationAttributes</code> (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (<code>PersonsWithRequiredEquipment</code>), which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>), and the persons in which a determination could not be made (<code>PersonsIndeterminate</code>).</p> <p>To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the <code>PersonsWithRequiredEquipment</code> array. If you want to find out more about a person, such as the location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p>
    """
    
    persons_indeterminate: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonsIndeterminate') }})
    persons_with_required_equipment: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonsWithRequiredEquipment') }})
    persons_without_required_equipment: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonsWithoutRequiredEquipment') }})
    
