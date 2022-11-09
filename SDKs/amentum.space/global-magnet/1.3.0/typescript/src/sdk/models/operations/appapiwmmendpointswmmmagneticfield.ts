import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppApiWmmEndpointsWmmMagneticFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=altitude" })
  altitude: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class AppApiWmmEndpointsWmmMagneticFieldRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppApiWmmEndpointsWmmMagneticFieldQueryParams;
}


// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination
/** 
 * The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
 * 
**/
export class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination extends SpeakeasyBase {
  @Metadata({ data: "json, name=units" })
  units?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation
/** 
 * Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
 * 
**/
export class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation extends SpeakeasyBase {
  @Metadata({ data: "json, name=units" })
  units?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination
/** 
 * Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing. 
 * 
**/
export class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination extends SpeakeasyBase {
  @Metadata({ data: "json, name=units" })
  units?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


// AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity
/** 
 * Total magnetic field intensity in nano Teslas.
 * 
**/
export class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity extends SpeakeasyBase {
  @Metadata({ data: "json, name=units" })
  units?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class AppApiWmmEndpointsWmmMagneticField200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=declination" })
  declination?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination;

  @Metadata({ data: "json, name=grid_variation" })
  gridVariation?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation;

  @Metadata({ data: "json, name=inclination" })
  inclination?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination;

  @Metadata({ data: "json, name=total_intensity" })
  totalIntensity?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity;
}


export class AppApiWmmEndpointsWmmMagneticFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appApiWmmEndpointsWmmMagneticField200ApplicationJsonObject?: AppApiWmmEndpointsWmmMagneticField200ApplicationJson;
}
