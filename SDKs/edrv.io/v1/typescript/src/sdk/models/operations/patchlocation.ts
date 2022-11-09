import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchLocationRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PatchLocationRequestBodyCoordinates extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class PatchLocationRequestBodyOpeningHours0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}


export class PatchLocationRequestBodyOpeningHours extends SpeakeasyBase {
  @Metadata({ data: "json, name=0", elemType: operations.PatchLocationRequestBodyOpeningHours0 })
  zero?: PatchLocationRequestBodyOpeningHours0[];

  @Metadata({ data: "json, name=1", elemType: operations.PatchLocationRequestBodyOpeningHours1 })
  one?: PatchLocationRequestBodyOpeningHours1[];

  @Metadata({ data: "json, name=2", elemType: operations.PatchLocationRequestBodyOpeningHours2 })
  two?: PatchLocationRequestBodyOpeningHours2[];

  @Metadata({ data: "json, name=3", elemType: operations.PatchLocationRequestBodyOpeningHours3 })
  three?: PatchLocationRequestBodyOpeningHours3[];

  @Metadata({ data: "json, name=4", elemType: operations.PatchLocationRequestBodyOpeningHours4 })
  four?: PatchLocationRequestBodyOpeningHours4[];

  @Metadata({ data: "json, name=5", elemType: operations.PatchLocationRequestBodyOpeningHours5 })
  five?: PatchLocationRequestBodyOpeningHours5[];

  @Metadata({ data: "json, name=6", elemType: operations.PatchLocationRequestBodyOpeningHours6 })
  six?: PatchLocationRequestBodyOpeningHours6[];
}


export class PatchLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=address" })
  address?: PatchLocationRequestBodyAddress;

  @Metadata({ data: "json, name=chargestations" })
  chargestations?: any[];

  @Metadata({ data: "json, name=coordinates" })
  coordinates?: PatchLocationRequestBodyCoordinates;

  @Metadata({ data: "json, name=openingHours" })
  openingHours?: PatchLocationRequestBodyOpeningHours;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class PatchLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchLocationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchLocationRequestBody;
}


export class PatchLocation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class PatchLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchLocation200ApplicationJsonObject?: PatchLocation200ApplicationJson;
}
