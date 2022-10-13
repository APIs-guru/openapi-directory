from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobconfigurationtablecopy
from . import jobconfigurationextract
from . import jobconfigurationload
from . import jobconfigurationquery


@dataclass_json
@dataclass
class JobConfiguration:
    copy: Optional[jobconfigurationtablecopy.JobConfigurationTableCopy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copy' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    extract: Optional[jobconfigurationextract.JobConfigurationExtract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extract' }})
    job_timeout_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTimeoutMs' }})
    job_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    load: Optional[jobconfigurationload.JobConfigurationLoad] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load' }})
    query: Optional[jobconfigurationquery.JobConfigurationQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
