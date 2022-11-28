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
import { AppendChatMessageUsingGetRequest, AppendChatMessageUsingGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AppendChatMessageUsingGetRequest = {
  queryParams: {
    authorId: "voluptas",
    padId: "nostrum",
    text: "facilis",
    time: "repellat",
  },
};

sdk.sdk.appendChatMessageUsingGet(req).then((res: AppendChatMessageUsingGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `appendChatMessageUsingGet` - appends a chat message
* `appendChatMessageUsingPost` - appends a chat message
* `appendTextUsingGet`
* `appendTextUsingPost`
* `checkTokenUsingGet` - returns ok when the current api token is valid
* `checkTokenUsingPost` - returns ok when the current api token is valid
* `copyPadUsingGet`
* `copyPadUsingPost`
* `copyPadWithoutHistoryUsingGet`
* `copyPadWithoutHistoryUsingPost`
* `createAuthorIfNotExistsForUsingGet` - this functions helps you to map your application author ids to Etherpad author ids
* `createAuthorIfNotExistsForUsingPost` - this functions helps you to map your application author ids to Etherpad author ids
* `createAuthorUsingGet` - creates a new author
* `createAuthorUsingPost` - creates a new author
* `createDiffHtmlUsingGet`
* `createDiffHtmlUsingPost`
* `createGroupIfNotExistsForUsingGet` - this functions helps you to map your application group ids to Etherpad group ids
* `createGroupIfNotExistsForUsingPost` - this functions helps you to map your application group ids to Etherpad group ids
* `createGroupPadUsingGet` - creates a new pad in this group
* `createGroupPadUsingPost` - creates a new pad in this group
* `createGroupUsingGet` - creates a new group
* `createGroupUsingPost` - creates a new group
* `createPadUsingGet` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `createPadUsingPost` - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* `createSessionUsingGet` - creates a new session. validUntil is an unix timestamp in seconds
* `createSessionUsingPost` - creates a new session. validUntil is an unix timestamp in seconds
* `deleteGroupUsingGet` - deletes a group
* `deleteGroupUsingPost` - deletes a group
* `deletePadUsingGet` - deletes a pad
* `deletePadUsingPost` - deletes a pad
* `deleteSessionUsingGet` - deletes a session
* `deleteSessionUsingPost` - deletes a session
* `getAttributePoolUsingGet`
* `getAttributePoolUsingPost`
* `getAuthorNameUsingGet` - Returns the Author Name of the author
* `getAuthorNameUsingPost` - Returns the Author Name of the author
* `getChatHeadUsingGet` - returns the chatHead (chat-message) of the pad
* `getChatHeadUsingPost` - returns the chatHead (chat-message) of the pad
* `getChatHistoryUsingGet` - returns the chat history
* `getChatHistoryUsingPost` - returns the chat history
* `getHtmlUsingGet` - returns the text of a pad formatted as HTML
* `getHtmlUsingPost` - returns the text of a pad formatted as HTML
* `getLastEditedUsingGet` - returns the timestamp of the last revision of the pad
* `getLastEditedUsingPost` - returns the timestamp of the last revision of the pad
* `getPadIdUsingGet`
* `getPadIdUsingPost`
* `getPublicStatusUsingGet` - return true of false
* `getPublicStatusUsingPost` - return true of false
* `getReadOnlyIdUsingGet` - returns the read only link of a pad
* `getReadOnlyIdUsingPost` - returns the read only link of a pad
* `getRevisionChangesetUsingGet`
* `getRevisionChangesetUsingPost`
* `getRevisionsCountUsingGet` - returns the number of revisions of this pad
* `getRevisionsCountUsingPost` - returns the number of revisions of this pad
* `getSavedRevisionsCountUsingGet`
* `getSavedRevisionsCountUsingPost`
* `getSessionInfoUsingGet` - returns informations about a session
* `getSessionInfoUsingPost` - returns informations about a session
* `getStatsUsingGet`
* `getStatsUsingPost`
* `getTextUsingGet` - returns the text of a pad
* `getTextUsingPost` - returns the text of a pad
* `listAllGroupsUsingGet`
* `listAllGroupsUsingPost`
* `listAllPadsUsingGet` - list all the pads
* `listAllPadsUsingPost` - list all the pads
* `listAuthorsOfPadUsingGet` - returns an array of authors who contributed to this pad
* `listAuthorsOfPadUsingPost` - returns an array of authors who contributed to this pad
* `listPadsOfAuthorUsingGet` - returns an array of all pads this author contributed to
* `listPadsOfAuthorUsingPost` - returns an array of all pads this author contributed to
* `listPadsUsingGet` - returns all pads of this group
* `listPadsUsingPost` - returns all pads of this group
* `listSavedRevisionsUsingGet`
* `listSavedRevisionsUsingPost`
* `listSessionsOfAuthorUsingGet` - returns all sessions of an author
* `listSessionsOfAuthorUsingPost` - returns all sessions of an author
* `listSessionsOfGroupUsingGet`
* `listSessionsOfGroupUsingPost`
* `movePadUsingGet`
* `movePadUsingPost`
* `padUsersCountUsingGet` - returns the number of user that are currently editing this pad
* `padUsersCountUsingPost` - returns the number of user that are currently editing this pad
* `padUsersUsingGet` - returns the list of users that are currently editing this pad
* `padUsersUsingPost` - returns the list of users that are currently editing this pad
* `restoreRevisionUsingGet`
* `restoreRevisionUsingPost`
* `saveRevisionUsingGet`
* `saveRevisionUsingPost`
* `sendClientsMessageUsingGet` - sends a custom message of type msg to the pad
* `sendClientsMessageUsingPost` - sends a custom message of type msg to the pad
* `setHtmlUsingGet` - sets the text of a pad with HTML
* `setHtmlUsingPost` - sets the text of a pad with HTML
* `setPublicStatusUsingGet` - sets a boolean for the public status of a pad
* `setPublicStatusUsingPost` - sets a boolean for the public status of a pad
* `setTextUsingGet` - sets the text of a pad
* `setTextUsingPost` - sets the text of a pad

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
