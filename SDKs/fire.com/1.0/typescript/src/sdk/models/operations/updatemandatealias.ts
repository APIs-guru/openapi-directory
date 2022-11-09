import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMandateAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class UpdateMandateAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMandateAliasPathParams;
}


export class UpdateMandateAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
