from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CaseDetails:
    r"""CaseDetails
    <p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId</b> - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode</b> - The category of problem for the support case. Corresponds to the <code>CategoryCode</code> values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId</b> - The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language</b> - The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English (\"en\") and Japanese (\"ja\"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>nextToken</b> - A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode</b> - The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode</b> - The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status</b> - The status of the case in the AWS Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject</b> - The subject line of the case.</p> </li> <li> <p> <b>submittedBy</b> - The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated</b> - The time the case was created, in ISO-8601 format.</p> </li> </ul>
    """
    
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseId') }})
    category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryCode') }})
    cc_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailAddresses') }})
    display_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayId') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    recent_communications: Optional[RecentCaseCommunications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentCommunications') }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCode') }})
    severity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityCode') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    submitted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedBy') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeCreated') }})
    
