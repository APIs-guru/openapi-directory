# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AppendChatMessageUsingGetRequest(
    query_params=operations.AppendChatMessageUsingGetQueryParams(
        author_id="voluptas",
        pad_id="nostrum",
        text="facilis",
        time="repellat",
    ),
)
    
res = s.sdk.append_chat_message_using_get(req)

if res.append_chat_message_using_get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `append_chat_message_using_get` - appends a chat message
* `append_chat_message_using_post` - appends a chat message
* `append_text_using_get`
* `append_text_using_post`
* `check_token_using_get` - returns ok when the current api token is valid
* `check_token_using_post` - returns ok when the current api token is valid
* `copy_pad_using_get`
* `copy_pad_using_post`
* `copy_pad_without_history_using_get`
* `copy_pad_without_history_using_post`
* `create_author_if_not_exists_for_using_get` - this functions helps you to map your application author ids to Etherpad author ids
* `create_author_if_not_exists_for_using_post` - this functions helps you to map your application author ids to Etherpad author ids
* `create_author_using_get` - creates a new author
* `create_author_using_post` - creates a new author
* `create_diff_html_using_get`
* `create_diff_html_using_post`
* `create_group_if_not_exists_for_using_get` - this functions helps you to map your application group ids to Etherpad group ids
* `create_group_if_not_exists_for_using_post` - this functions helps you to map your application group ids to Etherpad group ids
* `create_group_pad_using_get` - creates a new pad in this group
* `create_group_pad_using_post` - creates a new pad in this group
* `create_group_using_get` - creates a new group
* `create_group_using_post` - creates a new group
* `create_pad_using_get` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `create_pad_using_post` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `create_session_using_get` - creates a new session. validUntil is an unix timestamp in seconds
* `create_session_using_post` - creates a new session. validUntil is an unix timestamp in seconds
* `delete_group_using_get` - deletes a group
* `delete_group_using_post` - deletes a group
* `delete_pad_using_get` - deletes a pad
* `delete_pad_using_post` - deletes a pad
* `delete_session_using_get` - deletes a session
* `delete_session_using_post` - deletes a session
* `get_attribute_pool_using_get`
* `get_attribute_pool_using_post`
* `get_author_name_using_get` - Returns the Author Name of the author
* `get_author_name_using_post` - Returns the Author Name of the author
* `get_chat_head_using_get` - returns the chatHead (chat-message) of the pad
* `get_chat_head_using_post` - returns the chatHead (chat-message) of the pad
* `get_chat_history_using_get` - returns the chat history
* `get_chat_history_using_post` - returns the chat history
* `get_html_using_get` - returns the text of a pad formatted as HTML
* `get_html_using_post` - returns the text of a pad formatted as HTML
* `get_last_edited_using_get` - returns the timestamp of the last revision of the pad
* `get_last_edited_using_post` - returns the timestamp of the last revision of the pad
* `get_pad_id_using_get`
* `get_pad_id_using_post`
* `get_public_status_using_get` - return true of false
* `get_public_status_using_post` - return true of false
* `get_read_only_id_using_get` - returns the read only link of a pad
* `get_read_only_id_using_post` - returns the read only link of a pad
* `get_revision_changeset_using_get`
* `get_revision_changeset_using_post`
* `get_revisions_count_using_get` - returns the number of revisions of this pad
* `get_revisions_count_using_post` - returns the number of revisions of this pad
* `get_saved_revisions_count_using_get`
* `get_saved_revisions_count_using_post`
* `get_session_info_using_get` - returns informations about a session
* `get_session_info_using_post` - returns informations about a session
* `get_stats_using_get`
* `get_stats_using_post`
* `get_text_using_get` - returns the text of a pad
* `get_text_using_post` - returns the text of a pad
* `list_all_groups_using_get`
* `list_all_groups_using_post`
* `list_all_pads_using_get` - list all the pads
* `list_all_pads_using_post` - list all the pads
* `list_authors_of_pad_using_get` - returns an array of authors who contributed to this pad
* `list_authors_of_pad_using_post` - returns an array of authors who contributed to this pad
* `list_pads_of_author_using_get` - returns an array of all pads this author contributed to
* `list_pads_of_author_using_post` - returns an array of all pads this author contributed to
* `list_pads_using_get` - returns all pads of this group
* `list_pads_using_post` - returns all pads of this group
* `list_saved_revisions_using_get`
* `list_saved_revisions_using_post`
* `list_sessions_of_author_using_get` - returns all sessions of an author
* `list_sessions_of_author_using_post` - returns all sessions of an author
* `list_sessions_of_group_using_get`
* `list_sessions_of_group_using_post`
* `move_pad_using_get`
* `move_pad_using_post`
* `pad_users_count_using_get` - returns the number of user that are currently editing this pad
* `pad_users_count_using_post` - returns the number of user that are currently editing this pad
* `pad_users_using_get` - returns the list of users that are currently editing this pad
* `pad_users_using_post` - returns the list of users that are currently editing this pad
* `restore_revision_using_get`
* `restore_revision_using_post`
* `save_revision_using_get`
* `save_revision_using_post`
* `send_clients_message_using_get` - sends a custom message of type msg to the pad
* `send_clients_message_using_post` - sends a custom message of type msg to the pad
* `set_html_using_get` - sets the text of a pad with HTML
* `set_html_using_post` - sets the text of a pad with HTML
* `set_public_status_using_get` - sets a boolean for the public status of a pad
* `set_public_status_using_post` - sets a boolean for the public status of a pad
* `set_text_using_get` - sets the text of a pad
* `set_text_using_post` - sets the text of a pad

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
