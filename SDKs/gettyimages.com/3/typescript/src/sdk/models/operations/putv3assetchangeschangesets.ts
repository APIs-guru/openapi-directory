import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutV3AssetChangesChangeSetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=batch_size" })
  batchSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=channel_id" })
  channelId?: number;
}


export class PutV3AssetChangesChangeSetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PutV3AssetChangesChangeSetsQueryParams;
}


export class PutV3AssetChangesChangeSetsResponse extends SpeakeasyBase {
  @Metadata()
  assetChanges?: shared.AssetChanges;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
