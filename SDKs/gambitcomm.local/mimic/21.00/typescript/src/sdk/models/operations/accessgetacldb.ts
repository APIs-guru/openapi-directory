import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessGetAcldbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessGetAcldb200ApplicationJsonString?: string;
}
