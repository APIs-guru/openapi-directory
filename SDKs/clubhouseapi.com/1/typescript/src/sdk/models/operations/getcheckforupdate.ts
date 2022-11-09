import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCheckForUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_testflight" })
  isTestflight?: number;
}


export class GetCheckForUpdateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCheckForUpdateQueryParams;
}


export class GetCheckForUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
