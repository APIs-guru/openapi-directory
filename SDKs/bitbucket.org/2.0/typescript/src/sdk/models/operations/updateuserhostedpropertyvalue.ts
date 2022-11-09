import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateUserHostedPropertyValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class UpdateUserHostedPropertyValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserHostedPropertyValuePathParams;
}


export class UpdateUserHostedPropertyValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
