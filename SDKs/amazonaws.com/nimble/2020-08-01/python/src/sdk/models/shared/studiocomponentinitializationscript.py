from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import launchprofileplatform_enum
from . import studiocomponentinitializationscriptruncontext_enum


@dataclass_json
@dataclass
class StudioComponentInitializationScript:
    launch_profile_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfileProtocolVersion' }})
    platform: Optional[launchprofileplatform_enum.LaunchProfilePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    run_context: Optional[studiocomponentinitializationscriptruncontext_enum.StudioComponentInitializationScriptRunContextEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runContext' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    
