import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KpIsForDailyAppUninstallsByDateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class KpIsForDailyAppUninstallsByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: KpIsForDailyAppUninstallsByDateQueryParams;
}


export class KpIsForDailyAppUninstallsByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
