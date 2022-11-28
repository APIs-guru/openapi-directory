from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppPermissionsActionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsAdministrationEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsChecksEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsContentReferencesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsContentsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsDeploymentsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsEnvironmentsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsIssuesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsMembersEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsMetadataEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationAdministrationEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationHooksEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationPlanEnum(str, Enum):
    READ = "read"

class AppPermissionsOrganizationProjectsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"

class AppPermissionsOrganizationSecretsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationSelfHostedRunnersEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsOrganizationUserBlockingEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsPackagesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsPagesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsPullRequestsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsRepositoryHooksEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsRepositoryProjectsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"

class AppPermissionsSecretScanningAlertsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsSecretsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsSecurityEventsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsSingleFileEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsStatusesEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsTeamDiscussionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"

class AppPermissionsVulnerabilityAlertsEnum(str, Enum):
    READ = "read"

class AppPermissionsWorkflowsEnum(str, Enum):
    WRITE = "write"


@dataclass_json
@dataclass
class AppPermissions:
    r"""AppPermissions
    The permissions granted to the user-to-server access token.
    """
    
    actions: Optional[AppPermissionsActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    administration: Optional[AppPermissionsAdministrationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administration') }})
    checks: Optional[AppPermissionsChecksEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checks') }})
    content_references: Optional[AppPermissionsContentReferencesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_references') }})
    contents: Optional[AppPermissionsContentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    deployments: Optional[AppPermissionsDeploymentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    environments: Optional[AppPermissionsEnvironmentsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    issues: Optional[AppPermissionsIssuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    members: Optional[AppPermissionsMembersEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    metadata: Optional[AppPermissionsMetadataEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    organization_administration: Optional[AppPermissionsOrganizationAdministrationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_administration') }})
    organization_hooks: Optional[AppPermissionsOrganizationHooksEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_hooks') }})
    organization_plan: Optional[AppPermissionsOrganizationPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_plan') }})
    organization_projects: Optional[AppPermissionsOrganizationProjectsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_projects') }})
    organization_secrets: Optional[AppPermissionsOrganizationSecretsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_secrets') }})
    organization_self_hosted_runners: Optional[AppPermissionsOrganizationSelfHostedRunnersEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_self_hosted_runners') }})
    organization_user_blocking: Optional[AppPermissionsOrganizationUserBlockingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_user_blocking') }})
    packages: Optional[AppPermissionsPackagesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    pages: Optional[AppPermissionsPagesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    pull_requests: Optional[AppPermissionsPullRequestsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    repository_hooks: Optional[AppPermissionsRepositoryHooksEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_hooks') }})
    repository_projects: Optional[AppPermissionsRepositoryProjectsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_projects') }})
    secret_scanning_alerts: Optional[AppPermissionsSecretScanningAlertsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret_scanning_alerts') }})
    secrets: Optional[AppPermissionsSecretsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    security_events: Optional[AppPermissionsSecurityEventsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security_events') }})
    single_file: Optional[AppPermissionsSingleFileEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file') }})
    statuses: Optional[AppPermissionsStatusesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    team_discussions: Optional[AppPermissionsTeamDiscussionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_discussions') }})
    vulnerability_alerts: Optional[AppPermissionsVulnerabilityAlertsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerability_alerts') }})
    workflows: Optional[AppPermissionsWorkflowsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflows') }})
    
