import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeHook
/** 
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
**/
export class CodeHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageVersion" })
  messageVersion: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
