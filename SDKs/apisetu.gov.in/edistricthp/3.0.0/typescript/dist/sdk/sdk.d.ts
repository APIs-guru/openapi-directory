import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/edistricthp/v3"];
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
     * aecmw - Application for Renewal of Contractor Migrant Workmen license
     *
     * API to verify Application for Renewal of Contractor Migrant Workmen license.
    **/
    aecmw(req: operations.AecmwRequest, config?: AxiosRequestConfig): Promise<operations.AecmwResponse>;
    /**
     * aemtw - Application for Renewal of Motor Transport Worker Registration
     *
     * API to verify Application for Renewal of Motor Transport Worker Registration.
    **/
    aemtw(req: operations.AemtwRequest, config?: AxiosRequestConfig): Promise<operations.AemtwResponse>;
    /**
     * agcer - Agriculture/ Agriculturist Certificate
     *
     * API to verify Agriculture/ Agriculturist Certificate.
    **/
    agcer(req: operations.AgcerRequest, config?: AxiosRequestConfig): Promise<operations.AgcerResponse>;
    /**
     * alimw - Application for License for Inter State Migrant Workmen
     *
     * API to verify Application for License for Inter State Migrant Workmen.
    **/
    alimw(req: operations.AlimwRequest, config?: AxiosRequestConfig): Promise<operations.AlimwResponse>;
    /**
     * arcmw - Application for Registration of Contractor Migrant Workmen license
     *
     * API to verify Application for Registration of Contractor Migrant Workmen license.
    **/
    arcmw(req: operations.ArcmwRequest, config?: AxiosRequestConfig): Promise<operations.ArcmwResponse>;
    /**
     * armtw - Application for Registration of Motor Transport Worker Registration
     *
     * API to verify Application for Registration of Motor Transport Worker Registration.
    **/
    armtw(req: operations.ArmtwRequest, config?: AxiosRequestConfig): Promise<operations.ArmtwResponse>;
    /**
     * bacer - Backward Area Certificate
     *
     * API to verify Backward Area Certificate.
    **/
    bacer(req: operations.BacerRequest, config?: AxiosRequestConfig): Promise<operations.BacerResponse>;
    /**
     * bhcer - Bonafide Certificate
     *
     * API to verify Bonafide Certificate.
    **/
    bhcer(req: operations.BhcerRequest, config?: AxiosRequestConfig): Promise<operations.BhcerResponse>;
    /**
     * bpcrd - BPL Card
     *
     * API to verify BPL Card.
    **/
    bpcrd(req: operations.BpcrdRequest, config?: AxiosRequestConfig): Promise<operations.BpcrdResponse>;
    /**
     * btcer - Birth Certificate
     *
     * API to verify Birth Certificate.
    **/
    btcer(req: operations.BtcerRequest, config?: AxiosRequestConfig): Promise<operations.BtcerResponse>;
    /**
     * cecer - Renewal Certificate of Contract Labour License
     *
     * API to verify Renewal Certificate of Contract Labour License.
    **/
    cecer(req: operations.CecerRequest, config?: AxiosRequestConfig): Promise<operations.CecerResponse>;
    /**
     * chcer - Character Certificate
     *
     * API to verify Character Certificate.
    **/
    chcer(req: operations.ChcerRequest, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * clcer - Registration Certificate for Contract Labour License
     *
     * API to verify Registration Certificate for Contract Labour License.
    **/
    clcer(req: operations.ClcerRequest, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * coprg - Copy of Pariwar Register
     *
     * API to verify Copy of Pariwar Register.
    **/
    coprg(req: operations.CoprgRequest, config?: AxiosRequestConfig): Promise<operations.CoprgResponse>;
    /**
     * dccer - Dogra Class Certificate
     *
     * API to verify Dogra Class Certificate.
    **/
    dccer(req: operations.DccerRequest, config?: AxiosRequestConfig): Promise<operations.DccerResponse>;
    /**
     * dmcer - Domicile Certificate
     *
     * API to verify Domicile Certificate.
    **/
    dmcer(req: operations.DmcerRequest, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * dpicr - Disabled Person Identity Card/ Certificate
     *
     * API to verify Disabled Person Identity Card/ Certificate.
    **/
    dpicr(req: operations.DpicrRequest, config?: AxiosRequestConfig): Promise<operations.DpicrResponse>;
    /**
     * dtcer - Death Certificate
     *
     * API to verify Death Certificate.
    **/
    dtcer(req: operations.DtcerRequest, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * ercer - Registration Certificate of Establishment Employing Contract Labour
     *
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
    **/
    ercer(req: operations.ErcerRequest, config?: AxiosRequestConfig): Promise<operations.ErcerResponse>;
    /**
     * ffcer - Freedom Fighter Certificate
     *
     * API to verify Freedom Fighter Certificate.
    **/
    ffcer(req: operations.FfcerRequest, config?: AxiosRequestConfig): Promise<operations.FfcerResponse>;
    /**
     * igcer - Indigent (Needy Person) Certificate
     *
     * API to verify Indigent (Needy Person) Certificate.
    **/
    igcer(req: operations.IgcerRequest, config?: AxiosRequestConfig): Promise<operations.IgcerResponse>;
    /**
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * lhcer - Legal Heir Certificate
     *
     * API to verify Legal Heir Certificate.
    **/
    lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * mncer - Minority Certificate
     *
     * API to verify Minority Certificate.
    **/
    mncer(req: operations.MncerRequest, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * mnrga - MNREGA Job Card
     *
     * API to verify MNREGA Job Card.
    **/
    mnrga(req: operations.MnrgaRequest, config?: AxiosRequestConfig): Promise<operations.MnrgaResponse>;
    /**
     * obcer - OBC Certificate
     *
     * API to verify OBC Certificate.
    **/
    obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * racer - Rural Area Certificate
     *
     * API to verify Rural Area Certificate.
    **/
    racer(req: operations.RacerRequest, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
    /**
     * rmcer - Marriage Certificate
     *
     * API to verify Marriage Certificate.
    **/
    rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * secer - Renewal Certificate of Shops And Commercial Establishment
     *
     * API to verify Renewal Certificate of Shops And Commercial Establishment.
    **/
    secer(req: operations.SecerRequest, config?: AxiosRequestConfig): Promise<operations.SecerResponse>;
    /**
     * shcer - SC/ST  Certificate
     *
     * API to verify SC/ST  Certificate.
    **/
    shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
    /**
     * sicrd - Senior Citizen Identity Card/ Certificate
     *
     * API to verify Senior Citizen Identity Card/ Certificate.
    **/
    sicrd(req: operations.SicrdRequest, config?: AxiosRequestConfig): Promise<operations.SicrdResponse>;
    /**
     * srcer - Registration Certificate of Shops And Commercial Establishment
     *
     * API to verify Registration Certificate of Shops And Commercial Establishment.
    **/
    srcer(req: operations.SrcerRequest, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
export {};
