from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Configuration:
    r"""Configuration
    A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
    """
    
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationId') }})
    configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationName') }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPhone') }})
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMessage') }})
    dpc_extras: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpcExtras') }})
    dpc_resource_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpcResourcePath') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class ConfigurationInput:
    r"""ConfigurationInput
    A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
    """
    
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationName') }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPhone') }})
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMessage') }})
    dpc_extras: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpcExtras') }})
    dpc_resource_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpcResourcePath') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    
