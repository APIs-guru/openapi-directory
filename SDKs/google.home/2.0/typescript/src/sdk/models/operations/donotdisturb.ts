import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DoNotDisturbHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class DoNotDisturbRequest extends SpeakeasyBase {
  @Metadata()
  headers: DoNotDisturbHeaders;
}


export class DoNotDisturbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getcurrentstate?: shared.Getcurrentstate;

  @Metadata()
  statusCode: number;
}
