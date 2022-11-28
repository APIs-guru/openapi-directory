import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetDestinyEntityDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityType" })
  entityType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hashIdentifier" })
  hashIdentifier: number;
}


export class Destiny2GetDestinyEntityDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetDestinyEntityDefinitionPathParams;
}


export class Destiny2GetDestinyEntityDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
