import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateServerEngineAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=AttributeValue" })
  attributeValue?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;
}
