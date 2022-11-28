import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetaGetZenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  metaGetZen200TextPlainString?: string;
}
