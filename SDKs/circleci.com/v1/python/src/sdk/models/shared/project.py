from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import aws
from . import scope_enum


@dataclass_json
@dataclass
class ProjectFeatureFlags:
    build_fork_prs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build-fork-prs' }})
    fleet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleet' }})
    junit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'junit' }})
    oss: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oss' }})
    osx: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osx' }})
    set_github_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'set-github-status' }})
    trusty_beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trusty-beta' }})
    

@dataclass_json
@dataclass
class Project:
    aws: Optional[aws.Aws] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aws' }})
    branches: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branches' }})
    campfire_notify_prefs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campfire_notify_prefs' }})
    campfire_room: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campfire_room' }})
    campfire_subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campfire_subdomain' }})
    campfire_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campfire_token' }})
    compile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compile' }})
    default_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_branch' }})
    dependencies: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencies' }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    feature_flags: Optional[ProjectFeatureFlags] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feature_flags' }})
    flowdock_api_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowdock_api_token' }})
    followed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followed' }})
    has_usable_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_usable_key' }})
    heroku_deploy_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroku_deploy_user' }})
    hipchat_api_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hipchat_api_token' }})
    hipchat_notify: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hipchat_notify' }})
    hipchat_notify_prefs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hipchat_notify_prefs' }})
    hipchat_room: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hipchat_room' }})
    irc_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'irc_channel' }})
    irc_keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'irc_keyword' }})
    irc_notify_prefs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'irc_notify_prefs' }})
    irc_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'irc_password' }})
    irc_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'irc_server' }})
    irc_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'irc_username' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    oss: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oss' }})
    parallel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallel' }})
    reponame: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reponame' }})
    scopes: Optional[List[scope_enum.ScopeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    setup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setup' }})
    slack_api_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_api_token' }})
    slack_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_channel' }})
    slack_channel_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_channel_override' }})
    slack_notify_prefs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_notify_prefs' }})
    slack_subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_subdomain' }})
    slack_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slack_webhook_url' }})
    ssh_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_keys' }})
    test: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    vcs_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs_type' }})
    vcs_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs_url' }})
    
