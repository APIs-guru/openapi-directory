import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccessListResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccessEntry })
  accessEntries?: shared.AccessEntry[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
