import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutV3AssetChangesChangeSetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=batch_size" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channel_id" })
  channelId?: number;
}


export class PutV3AssetChangesChangeSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PutV3AssetChangesChangeSetsQueryParams;
}


export class PutV3AssetChangesChangeSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetChanges?: shared.AssetChanges;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
