import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     *
     * <p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>
     *
     * <p><strong>Notes on location searching</strong>: <br />
     * - <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
     * - <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>
     *
    **/
    GetVersionIncidentsFormat(req: operations.GetVersionIncidentsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionIncidentsFormatResponse>;
    GetVersionIncidentsIdFormat(req: operations.GetVersionIncidentsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionIncidentsIdFormatResponse>;
    /**
     * <p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>
     *
     * <pre><code>{
     *   type: "FeatureCollection",
     *   features: [
     *     {
     *       type: "Feature",
     *       properties: {
     *       id: 4474199,
     *       type: "Theft",
     *       occurred_at: 1428536937
     *     },
     *       geometry: {
     *       type: "Point",
     *       coordinates: [ -122.6244177, 45.5164386 ]
     *     }
     *   }
     * }
     * </code></pre>
     *
     * <p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>
     *
     * <p><strong>Go forth and make maps!</strong></p>
     *
    **/
    GetVersionLocationsFormat(req: operations.GetVersionLocationsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionLocationsFormatResponse>;
    /**
     * <p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>
     *
     * <p><strong>Go forth and make maps!</strong></p>
     *
    **/
    GetVersionLocationsMarkersFormat(req: operations.GetVersionLocationsMarkersFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionLocationsMarkersFormatResponse>;
}
export {};
