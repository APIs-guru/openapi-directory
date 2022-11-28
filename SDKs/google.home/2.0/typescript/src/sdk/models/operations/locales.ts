import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LocalesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Example15 })
  example15s?: shared.Example15[];

  @SpeakeasyMetadata()
  statusCode: number;
}
