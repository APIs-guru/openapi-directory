import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetClanWeeklyRewardStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class Destiny2GetClanWeeklyRewardStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetClanWeeklyRewardStatePathParams;
}


export class Destiny2GetClanWeeklyRewardStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
