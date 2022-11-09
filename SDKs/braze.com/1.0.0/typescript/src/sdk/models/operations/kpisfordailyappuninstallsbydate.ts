import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KpIsForDailyAppUninstallsByDateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class KpIsForDailyAppUninstallsByDateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: KpIsForDailyAppUninstallsByDateQueryParams;
}


export class KpIsForDailyAppUninstallsByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
