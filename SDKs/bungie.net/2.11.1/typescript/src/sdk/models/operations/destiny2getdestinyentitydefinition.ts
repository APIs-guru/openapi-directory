import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetDestinyEntityDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=entityType" })
  entityType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hashIdentifier" })
  hashIdentifier: number;
}


export class Destiny2GetDestinyEntityDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetDestinyEntityDefinitionPathParams;
}


export class Destiny2GetDestinyEntityDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
