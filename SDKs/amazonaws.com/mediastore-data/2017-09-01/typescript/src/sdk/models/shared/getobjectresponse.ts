import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
