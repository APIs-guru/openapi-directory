import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WorkTypeApiAllHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiAllRequest extends SpeakeasyBase {
  @Metadata()
  headers: WorkTypeApiAllHeaders;
}


export class WorkTypeApiAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WorkTypeDetailsApiModel })
  workTypeDetailsApiModels?: shared.WorkTypeDetailsApiModel[];
}
