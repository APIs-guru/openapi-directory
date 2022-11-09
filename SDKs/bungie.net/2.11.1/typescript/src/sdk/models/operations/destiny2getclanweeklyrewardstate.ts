import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetClanWeeklyRewardStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class Destiny2GetClanWeeklyRewardStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetClanWeeklyRewardStatePathParams;
}


export class Destiny2GetClanWeeklyRewardStateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
