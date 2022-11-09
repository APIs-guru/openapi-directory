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
     * API to verify Application for Renewal of Contractor Migrant Workmen license.
    **/
    Aecmw(req: operations.AecmwRequest, config?: AxiosRequestConfig): Promise<operations.AecmwResponse>;
    /**
     * API to verify Application for Renewal of Motor Transport Worker Registration.
    **/
    Aemtw(req: operations.AemtwRequest, config?: AxiosRequestConfig): Promise<operations.AemtwResponse>;
    /**
     * API to verify Agriculture/ Agriculturist Certificate.
    **/
    Agcer(req: operations.AgcerRequest, config?: AxiosRequestConfig): Promise<operations.AgcerResponse>;
    /**
     * API to verify Application for License for Inter State Migrant Workmen.
    **/
    Alimw(req: operations.AlimwRequest, config?: AxiosRequestConfig): Promise<operations.AlimwResponse>;
    /**
     * API to verify Application for Registration of Contractor Migrant Workmen license.
    **/
    Arcmw(req: operations.ArcmwRequest, config?: AxiosRequestConfig): Promise<operations.ArcmwResponse>;
    /**
     * API to verify Application for Registration of Motor Transport Worker Registration.
    **/
    Armtw(req: operations.ArmtwRequest, config?: AxiosRequestConfig): Promise<operations.ArmtwResponse>;
    /**
     * API to verify Backward Area Certificate.
    **/
    Bacer(req: operations.BacerRequest, config?: AxiosRequestConfig): Promise<operations.BacerResponse>;
    /**
     * API to verify Bonafide Certificate.
    **/
    Bhcer(req: operations.BhcerRequest, config?: AxiosRequestConfig): Promise<operations.BhcerResponse>;
    /**
     * API to verify BPL Card.
    **/
    Bpcrd(req: operations.BpcrdRequest, config?: AxiosRequestConfig): Promise<operations.BpcrdResponse>;
    /**
     * API to verify Birth Certificate.
    **/
    Btcer(req: operations.BtcerRequest, config?: AxiosRequestConfig): Promise<operations.BtcerResponse>;
    /**
     * API to verify Renewal Certificate of Contract Labour License.
    **/
    Cecer(req: operations.CecerRequest, config?: AxiosRequestConfig): Promise<operations.CecerResponse>;
    /**
     * API to verify Character Certificate.
    **/
    Chcer(req: operations.ChcerRequest, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * API to verify Registration Certificate for Contract Labour License.
    **/
    Clcer(req: operations.ClcerRequest, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * API to verify Copy of Pariwar Register.
    **/
    Coprg(req: operations.CoprgRequest, config?: AxiosRequestConfig): Promise<operations.CoprgResponse>;
    /**
     * API to verify Dogra Class Certificate.
    **/
    Dccer(req: operations.DccerRequest, config?: AxiosRequestConfig): Promise<operations.DccerResponse>;
    /**
     * API to verify Domicile Certificate.
    **/
    Dmcer(req: operations.DmcerRequest, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * API to verify Disabled Person Identity Card/ Certificate.
    **/
    Dpicr(req: operations.DpicrRequest, config?: AxiosRequestConfig): Promise<operations.DpicrResponse>;
    /**
     * API to verify Death Certificate.
    **/
    Dtcer(req: operations.DtcerRequest, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
    **/
    Ercer(req: operations.ErcerRequest, config?: AxiosRequestConfig): Promise<operations.ErcerResponse>;
    /**
     * API to verify Freedom Fighter Certificate.
    **/
    Ffcer(req: operations.FfcerRequest, config?: AxiosRequestConfig): Promise<operations.FfcerResponse>;
    /**
     * API to verify Indigent (Needy Person) Certificate.
    **/
    Igcer(req: operations.IgcerRequest, config?: AxiosRequestConfig): Promise<operations.IgcerResponse>;
    /**
     * API to verify Income Certificate.
    **/
    Incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * API to verify Legal Heir Certificate.
    **/
    Lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * API to verify Minority Certificate.
    **/
    Mncer(req: operations.MncerRequest, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * API to verify MNREGA Job Card.
    **/
    Mnrga(req: operations.MnrgaRequest, config?: AxiosRequestConfig): Promise<operations.MnrgaResponse>;
    /**
     * API to verify OBC Certificate.
    **/
    Obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * API to verify Rural Area Certificate.
    **/
    Racer(req: operations.RacerRequest, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
    /**
     * API to verify Marriage Certificate.
    **/
    Rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * API to verify Renewal Certificate of Shops And Commercial Establishment.
    **/
    Secer(req: operations.SecerRequest, config?: AxiosRequestConfig): Promise<operations.SecerResponse>;
    /**
     * API to verify SC/ST  Certificate.
    **/
    Shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
    /**
     * API to verify Senior Citizen Identity Card/ Certificate.
    **/
    Sicrd(req: operations.SicrdRequest, config?: AxiosRequestConfig): Promise<operations.SicrdResponse>;
    /**
     * API to verify Registration Certificate of Shops And Commercial Establishment.
    **/
    Srcer(req: operations.SrcerRequest, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
export {};
