# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AddFavoriteRequest, AddFavoriteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddFavoriteRequest = {
  security: {
    oauth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    convId: "nobis",
  },
};

sdk.sdk.addFavorite(req).then((res: AddFavoriteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `addFavorite` - Adds a conversation to the favorites
* `addLabel` - Add a user label
* `addModerators` - Add moderators
* `addParticipantCommunity` - Adds participants to a community
* `addParticipantGroup` - Adds participants to a group conversation
* `addParticipantsToSpace` - Add Participant to Space
* `addPresenceWebHook` - Registers Presence WebHook registration
* `addRecentSpaceSearch` - Add recent search 
* `addTextItem` - Adds a message to a conversation
* `addTextItemWithParent` - Adds a message to an item
* `addWebHook` - Registers a WebHook
* `archiveConversation` - Archives conversation
* `assignLabel` - Adds a label to a conversation
* `assignLabels` - Assign labels
* `cancelSpaceSearch` - Cancels a space search of a client.
* `createCommunityConversation` - Creates a community conversation
* `createDirectConversation` - Creates a 1-to-1 conversation
* `createGroupConversation` - Creates a group conversation
* `createIncomingWebhook` - Create a new webhook for existing conversation.
* `createReply` - creates a reply to a topic
* `createSpace` - Create a space
* `createSpaceTopic` - creates a new space topic
* `deleteFavorite` - Removes a conversation from favorites
* `deleteIncomingWebhook` - Delete an existing webhook
* `deleteSpace` - Delete a space
* `deleteSpaceItem` - deletes a space item
* `deleteTextItem` - Deletes a message from a conversation
* `denySpaceAcces` - Deny access for a space
* `existsSpaceName` - Space name exists
* `flagItem` - Adds a flag to a message in a conversation
* `flagSpaceItem` - flag a space item
* `getActiveSessions` - Gets a list of active sessions
* `getCommunityConversations` - Gets a list of communities
* `getConversationItems` - Gets a list of conversation items
* `getConversationbyId` - Gets a conversation
* `getConversations` - Gets a list of conversations
* `getConversationsById` - Gets conversations
* `getConversationsByLabel` - Returns conversations with a certain label
* `getDirectConversation` - Checks for a 1-to-1 conversation
* `getDirectory` - Get the directory
* `getFavoriteConversations` - Gets favorite conversations
* `getFlagItem` - Gets a list of the flagged messages of a conversation
* `getFlagItemConv` - Gets a list of the flagged messages
* `getFlaggedItems` - Get flagged items
* `getIncomingWebhookByUser` - Get all webhooks of a special user.
* `getJoinDetails` - Gets the conference details of a conversation
* `getJoinDetailsMultiple` - Gets the conference details for multiple conversations
* `getJournalEntries` - Get journal
* `getLabel` - Returns all user labels
* `getLikes` - Get the likes of an item
* `getParticipantsByConvId` - Performs a list of participants
* `getParticipantsImportData` - missing documentation
* `getPendingParticipants` - Get the pending participants of a space
* `getPinnedConversations` - Returns pinned topics of a conversation
* `getPinnedTopics` - Retrieve pinned topics
* `getPresence` - Gets the presence status
* `getProfile` - Gets the authenticated user's profile information
* `getRecentSearches` - Retrieve recent space searches
* `getSingleConversationtem` - Returns a text item
* `getSpaceParticipants` - Get the participants of a space
* `getSpaceReplies` - Gets space replies
* `getSpaceTopics` - Gets space topics
* `getSpaces` - Get the spaces
* `getSpacesByIds` - Get the spaces by their ids
* `getSupportInfo` - Gets the support information
* `getUserByEmailAddress` - Get user by email
* `getUserById` - Gets the user's profile information
* `getUserPresence` - Gets the presence status
* `getWebHook` - Gets a list of webHooks
* `getWebHookById` - Gets a webHook
* `grantSpaceAcces` - grant access for a space
* `joinCommunityConversation` - Adds the authenticated user to a community
* `joinSpace` - Join a space
* `leaveSpace` - Leave a space
* `likeItem` - Adds a "like" to a message
* `likeSpaceItem` - Like a space item
* `moderateConversation` - Set conversation moderated
* `pinAConversation` - Pins a topic of a conversation
* `pinTopic` - Pin a topic
* `postWebhookAsSlackMessage` - Post text item for conversation via webhook.
* `removeLabel` - Remove a user label
* `removeModerators` - Remove moderators
* `removeParticipantCommunity` - Removes participants from a community
* `removeParticipantGroup` - Removes participants from a group conversation
* `removeWebHook` - Removes a registered webHook
* `removeWebHooks` - Removes all webHooks
* `requestSpaceAcces` - request access for a space
* `resolveInvitationToken` - Resolves an invite token to a conversation
* `searchConversations` - Performs a conversation search
* `searchParticipantsToAdd` - Finds participants to add to add to a space 
* `searchSpaceParticipants` - Get the participants of a space
* `searchUser` - Search for users
* `searchUsersList` - Search multiple users.
* `setUserPresence` - Updates the presence status
* `startBasicSpacesSearch` - starts a basic search in spaces
* `startDetailedSpaceSearch` - starts a detailed search in a space
* `unFlagItem` - Removes the flag from a message
* `unPinAConversation` - Unpins a topic of a conversation
* `unassignLabel` - Removes a label from a conversation
* `unassignLabels` - Unassign labels
* `undoArchiveConversation` - Unmute conversation
* `unflagSpaceItem` - Unflag a space item
* `unlikeItem` - Removes a "like" from a message
* `unlikeSpaceItem` - Unlike a space item
* `unmoderateConversation` - Set conversation unmoderated
* `unpinTopic` - Unpin a topic
* `updateConversationCommunity` - Updates the information of a community
* `updateConversationGroup` - Updates the information of a group conversation
* `updateParticipantInSpace` - Update participant
* `updatePresenceWebHook` - Updates a Presence WebHook registration
* `updateProfile` - Updates the user profile
* `updateReadTimestamp` - Update read timestamp
* `updateSpace` - Update a space
* `updateSpaceReply` - Updates a space reply
* `updateSpaceTopic` - Updates a topic
* `updateTextItem` - Updates a message
* `updateTopicTags` - Update tags
* `updateWebHook` - Updates a WebHook registration
* `v2GetDeviceInfos` - Get devices infos
* `v2GetTelephonyConversationId` - Get telephony conversation id
* `v2GetTopicWithReplies` - Gets space replies and a topic
* `v2RemoveParticipantsFromSpace` - Removes participants from a space
* `v2UpdateWelcomeBoxContent` - Update content of welcome box

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
