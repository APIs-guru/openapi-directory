import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LeaveSpacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LeaveSpaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class LeaveSpaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LeaveSpacePathParams;

  @Metadata()
  security: LeaveSpaceSecurity;
}


export class LeaveSpaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
