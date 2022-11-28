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
    
req = operations.AddFavoriteRequest(
    security=operations.AddFavoriteSecurity(
        oauth=shared.SchemeOauth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AddFavoritePathParams(
        conv_id="nobis",
    ),
)
    
res = s.sdk.add_favorite(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_favorite` - Adds a conversation to the favorites
* `add_label` - Add a user label
* `add_moderators` - Add moderators
* `add_participant_community` - Adds participants to a community
* `add_participant_group` - Adds participants to a group conversation
* `add_participants_to_space` - Add Participant to Space
* `add_presence_web_hook` - Registers Presence WebHook registration
* `add_recent_space_search` - Add recent search 
* `add_text_item` - Adds a message to a conversation
* `add_text_item_with_parent` - Adds a message to an item
* `add_web_hook` - Registers a WebHook
* `archive_conversation` - Archives conversation
* `assign_label` - Adds a label to a conversation
* `assign_labels` - Assign labels
* `cancel_space_search` - Cancels a space search of a client.
* `create_community_conversation` - Creates a community conversation
* `create_direct_conversation` - Creates a 1-to-1 conversation
* `create_group_conversation` - Creates a group conversation
* `create_incoming_webhook` - Create a new webhook for existing conversation.
* `create_reply` - creates a reply to a topic
* `create_space` - Create a space
* `create_space_topic` - creates a new space topic
* `delete_favorite` - Removes a conversation from favorites
* `delete_incoming_webhook` - Delete an existing webhook
* `delete_space` - Delete a space
* `delete_space_item` - deletes a space item
* `delete_text_item` - Deletes a message from a conversation
* `deny_space_acces` - Deny access for a space
* `exists_space_name` - Space name exists
* `flag_item` - Adds a flag to a message in a conversation
* `flag_space_item` - flag a space item
* `get_active_sessions` - Gets a list of active sessions
* `get_community_conversations` - Gets a list of communities
* `get_conversation_items` - Gets a list of conversation items
* `get_conversationby_id` - Gets a conversation
* `get_conversations` - Gets a list of conversations
* `get_conversations_by_id` - Gets conversations
* `get_conversations_by_label` - Returns conversations with a certain label
* `get_direct_conversation` - Checks for a 1-to-1 conversation
* `get_directory` - Get the directory
* `get_favorite_conversations` - Gets favorite conversations
* `get_flag_item` - Gets a list of the flagged messages of a conversation
* `get_flag_item_conv` - Gets a list of the flagged messages
* `get_flagged_items` - Get flagged items
* `get_incoming_webhook_by_user` - Get all webhooks of a special user.
* `get_join_details` - Gets the conference details of a conversation
* `get_join_details_multiple` - Gets the conference details for multiple conversations
* `get_journal_entries` - Get journal
* `get_label` - Returns all user labels
* `get_likes` - Get the likes of an item
* `get_participants_by_conv_id` - Performs a list of participants
* `get_participants_import_data` - missing documentation
* `get_pending_participants` - Get the pending participants of a space
* `get_pinned_conversations` - Returns pinned topics of a conversation
* `get_pinned_topics` - Retrieve pinned topics
* `get_presence` - Gets the presence status
* `get_profile` - Gets the authenticated user's profile information
* `get_recent_searches` - Retrieve recent space searches
* `get_single_conversationtem` - Returns a text item
* `get_space_participants` - Get the participants of a space
* `get_space_replies` - Gets space replies
* `get_space_topics` - Gets space topics
* `get_spaces` - Get the spaces
* `get_spaces_by_ids` - Get the spaces by their ids
* `get_support_info` - Gets the support information
* `get_user_by_email_address` - Get user by email
* `get_user_by_id` - Gets the user's profile information
* `get_user_presence` - Gets the presence status
* `get_web_hook` - Gets a list of webHooks
* `get_web_hook_by_id` - Gets a webHook
* `grant_space_acces` - grant access for a space
* `join_community_conversation` - Adds the authenticated user to a community
* `join_space` - Join a space
* `leave_space` - Leave a space
* `like_item` - Adds a "like" to a message
* `like_space_item` - Like a space item
* `moderate_conversation` - Set conversation moderated
* `pin_a_conversation` - Pins a topic of a conversation
* `pin_topic` - Pin a topic
* `post_webhook_as_slack_message` - Post text item for conversation via webhook.
* `remove_label` - Remove a user label
* `remove_moderators` - Remove moderators
* `remove_participant_community` - Removes participants from a community
* `remove_participant_group` - Removes participants from a group conversation
* `remove_web_hook` - Removes a registered webHook
* `remove_web_hooks` - Removes all webHooks
* `request_space_acces` - request access for a space
* `resolve_invitation_token` - Resolves an invite token to a conversation
* `search_conversations` - Performs a conversation search
* `search_participants_to_add` - Finds participants to add to add to a space 
* `search_space_participants` - Get the participants of a space
* `search_user` - Search for users
* `search_users_list` - Search multiple users.
* `set_user_presence` - Updates the presence status
* `start_basic_spaces_search` - starts a basic search in spaces
* `start_detailed_space_search` - starts a detailed search in a space
* `un_flag_item` - Removes the flag from a message
* `un_pin_a_conversation` - Unpins a topic of a conversation
* `unassign_label` - Removes a label from a conversation
* `unassign_labels` - Unassign labels
* `undo_archive_conversation` - Unmute conversation
* `unflag_space_item` - Unflag a space item
* `unlike_item` - Removes a "like" from a message
* `unlike_space_item` - Unlike a space item
* `unmoderate_conversation` - Set conversation unmoderated
* `unpin_topic` - Unpin a topic
* `update_conversation_community` - Updates the information of a community
* `update_conversation_group` - Updates the information of a group conversation
* `update_participant_in_space` - Update participant
* `update_presence_web_hook` - Updates a Presence WebHook registration
* `update_profile` - Updates the user profile
* `update_read_timestamp` - Update read timestamp
* `update_space` - Update a space
* `update_space_reply` - Updates a space reply
* `update_space_topic` - Updates a topic
* `update_text_item` - Updates a message
* `update_topic_tags` - Update tags
* `update_web_hook` - Updates a WebHook registration
* `v2_get_device_infos` - Get devices infos
* `v2_get_telephony_conversation_id` - Get telephony conversation id
* `v2_get_topic_with_replies` - Gets space replies and a topic
* `v2_remove_participants_from_space` - Removes participants from a space
* `v2_update_welcome_box_content` - Update content of welcome box

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
