import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeHook
/** 
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
**/
export class CodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageVersion" })
  messageVersion: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
