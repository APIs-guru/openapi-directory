# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AddFavoriteRequest{
        Security: operations.AddFavoriteSecurity{
            Oauth: shared.SchemeOauth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AddFavoritePathParams{
            ConvID: "nobis",
        },
    }
    
    res, err := s.Sdk.AddFavorite(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AddFavorite` - Adds a conversation to the favorites
* `AddLabel` - Add a user label
* `AddModerators` - Add moderators
* `AddParticipantCommunity` - Adds participants to a community
* `AddParticipantGroup` - Adds participants to a group conversation
* `AddParticipantsToSpace` - Add Participant to Space
* `AddPresenceWebHook` - Registers Presence WebHook registration
* `AddRecentSpaceSearch` - Add recent search 
* `AddTextItem` - Adds a message to a conversation
* `AddTextItemWithParent` - Adds a message to an item
* `AddWebHook` - Registers a WebHook
* `ArchiveConversation` - Archives conversation
* `AssignLabel` - Adds a label to a conversation
* `AssignLabels` - Assign labels
* `CancelSpaceSearch` - Cancels a space search of a client.
* `CreateCommunityConversation` - Creates a community conversation
* `CreateDirectConversation` - Creates a 1-to-1 conversation
* `CreateGroupConversation` - Creates a group conversation
* `CreateIncomingWebhook` - Create a new webhook for existing conversation.
* `CreateReply` - creates a reply to a topic
* `CreateSpace` - Create a space
* `CreateSpaceTopic` - creates a new space topic
* `DeleteFavorite` - Removes a conversation from favorites
* `DeleteIncomingWebhook` - Delete an existing webhook
* `DeleteSpace` - Delete a space
* `DeleteSpaceItem` - deletes a space item
* `DeleteTextItem` - Deletes a message from a conversation
* `DenySpaceAcces` - Deny access for a space
* `ExistsSpaceName` - Space name exists
* `FlagItem` - Adds a flag to a message in a conversation
* `FlagSpaceItem` - flag a space item
* `GetActiveSessions` - Gets a list of active sessions
* `GetCommunityConversations` - Gets a list of communities
* `GetConversationItems` - Gets a list of conversation items
* `GetConversationbyID` - Gets a conversation
* `GetConversations` - Gets a list of conversations
* `GetConversationsByID` - Gets conversations
* `GetConversationsByLabel` - Returns conversations with a certain label
* `GetDirectConversation` - Checks for a 1-to-1 conversation
* `GetDirectory` - Get the directory
* `GetFavoriteConversations` - Gets favorite conversations
* `GetFlagItem` - Gets a list of the flagged messages of a conversation
* `GetFlagItemConv` - Gets a list of the flagged messages
* `GetFlaggedItems` - Get flagged items
* `GetIncomingWebhookByUser` - Get all webhooks of a special user.
* `GetJoinDetails` - Gets the conference details of a conversation
* `GetJoinDetailsMultiple` - Gets the conference details for multiple conversations
* `GetJournalEntries` - Get journal
* `GetLabel` - Returns all user labels
* `GetLikes` - Get the likes of an item
* `GetParticipantsByConvID` - Performs a list of participants
* `GetParticipantsImportData` - missing documentation
* `GetPendingParticipants` - Get the pending participants of a space
* `GetPinnedConversations` - Returns pinned topics of a conversation
* `GetPinnedTopics` - Retrieve pinned topics
* `GetPresence` - Gets the presence status
* `GetProfile` - Gets the authenticated user's profile information
* `GetRecentSearches` - Retrieve recent space searches
* `GetSingleConversationtem` - Returns a text item
* `GetSpaceParticipants` - Get the participants of a space
* `GetSpaceReplies` - Gets space replies
* `GetSpaceTopics` - Gets space topics
* `GetSpaces` - Get the spaces
* `GetSpacesByIds` - Get the spaces by their ids
* `GetSupportInfo` - Gets the support information
* `GetUserByEmailAddress` - Get user by email
* `GetUserByID` - Gets the user's profile information
* `GetUserPresence` - Gets the presence status
* `GetWebHook` - Gets a list of webHooks
* `GetWebHookByID` - Gets a webHook
* `GrantSpaceAcces` - grant access for a space
* `JoinCommunityConversation` - Adds the authenticated user to a community
* `JoinSpace` - Join a space
* `LeaveSpace` - Leave a space
* `LikeItem` - Adds a "like" to a message
* `LikeSpaceItem` - Like a space item
* `ModerateConversation` - Set conversation moderated
* `PinAConversation` - Pins a topic of a conversation
* `PinTopic` - Pin a topic
* `PostWebhookAsSlackMessage` - Post text item for conversation via webhook.
* `RemoveLabel` - Remove a user label
* `RemoveModerators` - Remove moderators
* `RemoveParticipantCommunity` - Removes participants from a community
* `RemoveParticipantGroup` - Removes participants from a group conversation
* `RemoveWebHook` - Removes a registered webHook
* `RemoveWebHooks` - Removes all webHooks
* `RequestSpaceAcces` - request access for a space
* `ResolveInvitationToken` - Resolves an invite token to a conversation
* `SearchConversations` - Performs a conversation search
* `SearchParticipantsToAdd` - Finds participants to add to add to a space 
* `SearchSpaceParticipants` - Get the participants of a space
* `SearchUser` - Search for users
* `SearchUsersList` - Search multiple users.
* `SetUserPresence` - Updates the presence status
* `StartBasicSpacesSearch` - starts a basic search in spaces
* `StartDetailedSpaceSearch` - starts a detailed search in a space
* `UnFlagItem` - Removes the flag from a message
* `UnPinAConversation` - Unpins a topic of a conversation
* `UnassignLabel` - Removes a label from a conversation
* `UnassignLabels` - Unassign labels
* `UndoArchiveConversation` - Unmute conversation
* `UnflagSpaceItem` - Unflag a space item
* `UnlikeItem` - Removes a "like" from a message
* `UnlikeSpaceItem` - Unlike a space item
* `UnmoderateConversation` - Set conversation unmoderated
* `UnpinTopic` - Unpin a topic
* `UpdateConversationCommunity` - Updates the information of a community
* `UpdateConversationGroup` - Updates the information of a group conversation
* `UpdateParticipantInSpace` - Update participant
* `UpdatePresenceWebHook` - Updates a Presence WebHook registration
* `UpdateProfile` - Updates the user profile
* `UpdateReadTimestamp` - Update read timestamp
* `UpdateSpace` - Update a space
* `UpdateSpaceReply` - Updates a space reply
* `UpdateSpaceTopic` - Updates a topic
* `UpdateTextItem` - Updates a message
* `UpdateTopicTags` - Update tags
* `UpdateWebHook` - Updates a WebHook registration
* `V2GetDeviceInfos` - Get devices infos
* `V2GetTelephonyConversationID` - Get telephony conversation id
* `V2GetTopicWithReplies` - Gets space replies and a topic
* `V2RemoveParticipantsFromSpace` - Removes participants from a space
* `V2UpdateWelcomeBoxContent` - Update content of welcome box

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
