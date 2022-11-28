import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCheckForUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_testflight" })
  isTestflight?: number;
}


export class GetCheckForUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCheckForUpdateQueryParams;
}


export class GetCheckForUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
