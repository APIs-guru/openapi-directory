import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLocationsRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PostLocationsRequestBodyCoordinates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class PostLocationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address: PostLocationsRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=chargestations" })
  chargestations?: any[];

  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates: PostLocationsRequestBodyCoordinates;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName: string;
}


export class PostLocations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostLocationsRequestBody;
}


export class PostLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postLocations200ApplicationJsonObject?: PostLocations200ApplicationJson;
}
