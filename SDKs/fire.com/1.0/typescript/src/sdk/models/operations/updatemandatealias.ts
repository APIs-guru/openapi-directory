import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMandateAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class UpdateMandateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMandateAliasPathParams;
}


export class UpdateMandateAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
