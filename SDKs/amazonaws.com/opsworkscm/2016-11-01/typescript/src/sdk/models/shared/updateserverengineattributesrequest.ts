import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateServerEngineAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeValue" })
  attributeValue?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;
}
