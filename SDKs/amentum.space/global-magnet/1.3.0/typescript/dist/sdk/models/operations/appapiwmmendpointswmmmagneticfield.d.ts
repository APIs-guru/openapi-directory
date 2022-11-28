import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppApiWmmEndpointsWmmMagneticFieldQueryParams extends SpeakeasyBase {
    altitude: number;
    latitude: number;
    longitude: number;
    year: number;
}
/**
 * The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
 *
**/
export declare class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination extends SpeakeasyBase {
    units?: string;
    value?: number;
}
/**
 * Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
 *
**/
export declare class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation extends SpeakeasyBase {
    units?: string;
    value?: number;
}
/**
 * Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing.
 *
**/
export declare class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination extends SpeakeasyBase {
    units?: string;
    value?: number;
}
/**
 * Total magnetic field intensity in nano Teslas.
 *
**/
export declare class AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity extends SpeakeasyBase {
    units?: string;
    value?: number;
}
export declare class AppApiWmmEndpointsWmmMagneticField200ApplicationJson extends SpeakeasyBase {
    declination?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonDeclination;
    gridVariation?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonGridVariation;
    inclination?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonInclination;
    totalIntensity?: AppApiWmmEndpointsWmmMagneticField200ApplicationJsonTotalIntensity;
}
export declare class AppApiWmmEndpointsWmmMagneticFieldRequest extends SpeakeasyBase {
    queryParams: AppApiWmmEndpointsWmmMagneticFieldQueryParams;
}
export declare class AppApiWmmEndpointsWmmMagneticFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appApiWmmEndpointsWmmMagneticField200ApplicationJsonObject?: AppApiWmmEndpointsWmmMagneticField200ApplicationJson;
}
