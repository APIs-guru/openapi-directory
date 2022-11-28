from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Block:
    r"""Block
    <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html\">How Amazon Textract Works</a>.</p>
    """
    
    block_type: Optional[BlockTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockType') }})
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnIndex') }})
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnSpan') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    entity_types: Optional[List[EntityTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityTypes') }})
    geometry: Optional[Geometry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Page') }})
    relationships: Optional[List[Relationship]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Relationships') }})
    row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowIndex') }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowSpan') }})
    selection_status: Optional[SelectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectionStatus') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    text_type: Optional[TextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextType') }})
    
