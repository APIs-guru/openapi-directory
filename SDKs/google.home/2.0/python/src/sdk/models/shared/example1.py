from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import aogh
from . import audio
from . import buildinfo
from . import detail
from . import deviceinfo
from . import multizone
from . import net
from . import nightmodeparams
from . import opencast
from . import optin
from . import proxy
from . import settings
from . import setup
from . import sign
from . import usereq
from . import wifi


@dataclass_json
@dataclass
class Example1:
    aogh: aogh.Aogh = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aogh' }})
    audio: audio.Audio = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    build_info: buildinfo.BuildInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_info' }})
    detail: detail.Detail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    device_info: deviceinfo.DeviceInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_info' }})
    multizone: multizone.Multizone = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multizone' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    net: net.Net = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    night_mode_params: nightmodeparams.NightModeParams = field(default=None, metadata={'dataclasses_json': { 'field_name': 'night_mode_params' }})
    opencast: opencast.Opencast = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opencast' }})
    opt_in: optin.OptIn = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opt_in' }})
    proxy: proxy.Proxy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxy' }})
    settings: settings.Settings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    setup: setup.Setup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setup' }})
    sign: sign.Sign = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sign' }})
    user_eq: usereq.UserEq = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_eq' }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    wifi: wifi.Wifi = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifi' }})
    
