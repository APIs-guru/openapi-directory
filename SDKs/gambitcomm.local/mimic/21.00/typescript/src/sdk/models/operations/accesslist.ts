import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccessListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccessEntry })
  accessEntries?: shared.AccessEntry[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
