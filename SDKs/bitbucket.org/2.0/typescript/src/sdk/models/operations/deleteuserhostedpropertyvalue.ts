import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserHostedPropertyValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class DeleteUserHostedPropertyValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserHostedPropertyValuePathParams;
}


export class DeleteUserHostedPropertyValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
