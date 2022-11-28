import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DoNotDisturbHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class DoNotDisturbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DoNotDisturbHeaders;
}


export class DoNotDisturbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getcurrentstate?: shared.Getcurrentstate;

  @SpeakeasyMetadata()
  statusCode: number;
}
