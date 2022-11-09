import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=labelId" })
  labelId: string;
}


export class RemoveLabelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveLabelPathParams;

  @Metadata()
  security: RemoveLabelSecurity;
}


export class RemoveLabelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  label?: any;

  @Metadata()
  statusCode: number;
}
