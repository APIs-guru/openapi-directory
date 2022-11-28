import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchLocationRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PatchLocationRequestBodyCoordinates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class PatchLocationRequestBodyOpeningHours0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0", elemType: PatchLocationRequestBodyOpeningHours0 })
  zero?: PatchLocationRequestBodyOpeningHours0[];

  @SpeakeasyMetadata({ data: "json, name=1", elemType: PatchLocationRequestBodyOpeningHours1 })
  one?: PatchLocationRequestBodyOpeningHours1[];

  @SpeakeasyMetadata({ data: "json, name=2", elemType: PatchLocationRequestBodyOpeningHours2 })
  two?: PatchLocationRequestBodyOpeningHours2[];

  @SpeakeasyMetadata({ data: "json, name=3", elemType: PatchLocationRequestBodyOpeningHours3 })
  three?: PatchLocationRequestBodyOpeningHours3[];

  @SpeakeasyMetadata({ data: "json, name=4", elemType: PatchLocationRequestBodyOpeningHours4 })
  four?: PatchLocationRequestBodyOpeningHours4[];

  @SpeakeasyMetadata({ data: "json, name=5", elemType: PatchLocationRequestBodyOpeningHours5 })
  five?: PatchLocationRequestBodyOpeningHours5[];

  @SpeakeasyMetadata({ data: "json, name=6", elemType: PatchLocationRequestBodyOpeningHours6 })
  six?: PatchLocationRequestBodyOpeningHours6[];
}


export class PatchLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PatchLocationRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=chargestations" })
  chargestations?: any[];

  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: PatchLocationRequestBodyCoordinates;

  @SpeakeasyMetadata({ data: "json, name=openingHours" })
  openingHours?: PatchLocationRequestBodyOpeningHours;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class PatchLocation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class PatchLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchLocationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchLocationRequestBody;
}


export class PatchLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchLocation200ApplicationJsonObject?: PatchLocation200ApplicationJson;
}
