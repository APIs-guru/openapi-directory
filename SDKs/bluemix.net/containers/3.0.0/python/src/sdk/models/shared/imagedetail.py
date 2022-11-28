from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageDetailConfig:
    args_escaped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArgsEscaped') }})
    attach_stderr: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachStderr') }})
    attach_stdin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachStdin') }})
    attach_stdout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachStdout') }})
    cmd: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cmd') }})
    domainmame: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domainmame') }})
    entrypoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entrypoint') }})
    env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Env') }})
    exposed_ports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExposedPorts') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    on_build: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnBuild') }})
    open_stdin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenStdin') }})
    stdin_once: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StdinOnce') }})
    tty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tty') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    volumes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Volumes') }})
    working_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkingDir') }})
    

@dataclass_json
@dataclass
class ImageDetail:
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Architecture') }})
    config: Optional[ImageDetailConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Config') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    container_config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerConfig') }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created') }})
    docker_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DockerVersion') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Os') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parent') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    throwaway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Throwaway') }})
    virtual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VirtualSize') }})
    
