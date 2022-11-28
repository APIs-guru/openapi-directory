import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://chompthis.com/api/v2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getFoodBrandedBarcodePhp - Get a branded food item using a barcode
     *
     * ## Get data for a branded food using the food's UPC/EAN barcode.
     *
     * **Example**
     * > ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```
     *
     * **Tips**
     *   * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.
     *
    **/
    getFoodBrandedBarcodePhp(req: operations.GetFoodBrandedBarcodePhpRequest, config?: AxiosRequestConfig): Promise<operations.GetFoodBrandedBarcodePhpResponse>;
    /**
     * getFoodBrandedNamePhp - Get a branded food item by name
     *
     * ## Search for branded food items by name.
     *
     * **Example**
     * > ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```
     *
     * **Tips**
     *   * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
     *
     * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
     *
    **/
    getFoodBrandedNamePhp(req: operations.GetFoodBrandedNamePhpRequest, config?: AxiosRequestConfig): Promise<operations.GetFoodBrandedNamePhpResponse>;
    /**
     * getFoodBrandedSearchPhp - Get data for branded food items using various search parameters
     *
     * ## Search for branded food items using various parameters.
     *
     * **Example**
     * > ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```
     *
     * **Tips**
     *   * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.
     *
     * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
     *
    **/
    getFoodBrandedSearchPhp(req: operations.GetFoodBrandedSearchPhpRequest, config?: AxiosRequestConfig): Promise<operations.GetFoodBrandedSearchPhpResponse>;
    /**
     * getFoodIngredientSearchPhp - Get raw/generic food ingredient item(s)
     *
     * ## Get data for a specific ingredient or a specific set of ingredients.
     *
     * **Example #1: Single Ingredient**
     * > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```
     *
     * **Example #2: Set of Ingredients**
     * > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```
     *
     * **Tips**
     *   * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
     *
     * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
     *
    **/
    getFoodIngredientSearchPhp(req: operations.GetFoodIngredientSearchPhpRequest, config?: AxiosRequestConfig): Promise<operations.GetFoodIngredientSearchPhpResponse>;
}
export {};
